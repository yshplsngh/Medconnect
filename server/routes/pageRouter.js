import express from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
const router = express.Router();
// import { userModel } from '../models/userModel.js'
import { doctorModel } from "../models/doctorModel.js";
import { slotModel } from "../models/slotModel.js";
import verifyToken from '../middleware/VerifyToken.js';
import { userModel } from "../models/userModel.js";
const jwtSecret = "HaHa"


// using for getting all doctor af particuler specilization by doc id
router.post('/getspecialization', verifyToken, async (req, res) => {
    try {
        const { name } = req.body;
        // console.log(req.body);
        const doctor = await doctorModel.find({ specialization: name });
        if (doctor.length !== 0) {
            return res.json({ doctor: doctor, status: true });
        }
        return res.json({ msg: "No doctor found for this disease", status: false })
        // console.log(name);
    } catch (error) {
        console.log(error);
    }
})

router.post('/slotbooking', verifyToken, async (req, res) => {
    try {
        // console.log(req.user);
        // console.log(req.body);
        const { slotdata } = req.body;
        // console.log(slotdata);
        const docid = slotdata.docid;
        const userid = req.user.id;
        const usertext = slotdata.timeslot;
        // const docid = req
        // const timeslot = {day:req.user.slotdata.timeslot.day,time:req.user.slotdata.timeslot.time};
        // console.log(timeslot);
        // console.log(userid);
        console.log(usertext);
        const slot = await slotModel.create({
            docid,
            userid,
            usertext
        })

        console.log(slot);

        res.json({ status: true });
    } catch (error) {
        console.log(error);
        res.json({ status: false });
    }
})

router.post('/getslots', verifyToken, async(req, res) => {
    try {
        const userDataArray = [];
        const doctorid = req.user.id;
        // console.log(userid);
        const doctordetail = await doctorModel.find({_id:doctorid});
        userDataArray.push(doctordetail);
        const patients = await slotModel.find({docid:doctorid});
        // console.log(pateints);
        
        for (const patient of patients) {
            const userslottime = patient.usertext;
            const userdetail = await userModel.find({ _id: patient.userid });
            const userData = {
              userdetail,
              userslottime,
            };
          
            userDataArray.push(userData);
          }
        console.log(userDataArray);
        // const userdetail = await userModel.find({userid:pateint});
        // console.log(userdetail);
        // console.log(userid);
        res.json({ status: true ,userDataArray});
    } catch (error) {
        console.log(error);
    }
})

export { router as pageRouter };