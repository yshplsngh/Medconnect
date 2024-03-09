import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();
import { userModel } from '../models/userModel.js'
import { doctorModel } from "../models/doctorModel.js";
const jwtSecret = "HaHa"

// API route to handle user 
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await userModel.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await userModel.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await userModel.create({
      email,
      username,
      password: hashedPassword,
    });

    const data = {
      user: {
        id: user.id
      }
    }

    const authToken = jwt.sign(data, jwtSecret);
    console.log(authToken);
    return res.json({ status: true, authToken });
  } catch (ex) {
    // next(ex);
    console.log(ex);
    res.json({ msg: "internal server error" });
  }
})


// used to handle login page
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ msg: "Invalid credential", status: false });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.json({ msg: "Invalid credential", status: false });
    }

    const data = {
      user: {
        id: user.id
      }
    }

    const authToken = jwt.sign(data, jwtSecret);
    return res.json({ status: true, authToken });
  } catch (error) {
    console.error(error.message);
    res.json({ msg: "internal server error" });
  }
});


// this route is used for only practice purpose there is no actual use of it in app

router.get('/checktoken', async (req, res) => {
  const token = req.header('authToken');
  // console.log(token);
  if (!token) {
    res.json({ status: false });
  }
  try {
    const data = jwt.verify(token, jwtSecret);
    if (data) {
      const who = Object.keys(data)[0]
      res.json({ status: true ,who});
    }else{
      res.json({ status: false });
    }

  } catch (error) {
    res.json({ msg: "invalid token", status: false });
  }
})



router.post('/doctorregister', async (req, res) => {
  try {
    const { firstName, lastName, password, gender, contactNumber, emailAddress, streetAddress, city, state, zipCode, yearsOfPractice, licenseNumber, specialization} = req.body;
    // console.log(userLocation);
    const emailCheck = await doctorModel.findOne({ emailAddress });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const licenceCheck = await doctorModel.findOne({ licenseNumber });

    if (licenceCheck)
      return res.json({ msg: "Licence already exist", status: false });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);



    const doct = await doctorModel.create({
      firstName,
      lastName,
      password: hashedPassword,
      gender,
      contactNumber,
      emailAddress,
      streetAddress,
      city, state, zipCode,
      yearsOfPractice,
      licenseNumber, specialization,
    })

    // const doctor = doct.save();

    const data = {
      doctor: {
        id: doct.id
      }
    }

    // console.log(data);
    // console.log(doctor._id);
    const authToken = jwt.sign(data, jwtSecret);
    // console.log(dauthToken);
    return res.json({ status: true, authToken, docid: doct._id });

    // return res.json({ msg: "got it" });
  } catch (error) {
    console.log(error);
    res.json({ msg: "internal server error" });
  }
})


router.post('/doctorlogin', async (req, res) => {
  const { emailAddress, password } = req.body;
  try {
    let user = await doctorModel.findOne({ emailAddress });
    if (!user) {
      return res.json({ msg: "user not found ", status: false });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.json({ msg: "Invalid password", status: false });
    }
    const data = {
      user: {
        id: user.id
      }
    }

    const authToken = jwt.sign(data, jwtSecret);
    return res.json({ status: true, authToken });
  } catch (error) {
    console.error(error.message);
    res.json({ msg: "internal server error" });
  }
});


export { router as userRouter };