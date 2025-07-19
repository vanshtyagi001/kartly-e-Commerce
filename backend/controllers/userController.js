import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isSeller: user.isSeller,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});


const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, isSeller = false } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  const user = await User.create({ name, email, password, isSeller });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isSeller: user.isSeller,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});


const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isSeller: user.isSeller,
            phone: user.phone, 
            shippingAddress: user.shippingAddress, 
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});


const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.phone = req.body.phone || user.phone; 
        
        if (req.body.shippingAddress) {
            user.shippingAddress = {
                address: req.body.shippingAddress.address || user.shippingAddress.address,
                city: req.body.shippingAddress.city || user.shippingAddress.city,
                postalCode: req.body.shippingAddress.postalCode || user.shippingAddress.postalCode,
                country: req.body.shippingAddress.country || user.shippingAddress.country,
            };
        }

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isSeller: updatedUser.isSeller,
            phone: updatedUser.phone, 
            shippingAddress: updatedUser.shippingAddress, 
            token: generateToken(updatedUser._id),
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

export { authUser, registerUser, getUserProfile, updateUserProfile };