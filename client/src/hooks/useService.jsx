import { useEffect, useState } from "react";
import booking from '../semg/booking.svg'
import calendar from '../semg/calender.svg'
import mobile from '../semg/mobile.svg'
import healthcheckup from '../semg/healthcheckup.svg'
import checklist from '../semg/checklist.svg'
import staff from '../semg/staff.svg'


export default function useService() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Add a dummy API endpoint or URL here (replace with your actual API endpoint)
        const API_URL = "https://example.com/api/services";

        // Dummy data for testing
        const dummyData = [
            {
                sid: 1,
                image: booking,
                title: "Online Booking System",
            },
            {
                sid: 2,
                image: calendar,
                title: "Calendar Scheduler",
            },
            {
                sid: 3,
                image: mobile,
                title: "Appointment Alerts",
            },
            {
                sid: 4,
                image: healthcheckup,
                title: "Virtual Appointment Scheduling",
            },
            {
                sid: 5,
                image: checklist,
                title: "No-show Protection",
            },
            {
                sid: 6,
                title: "Staff Scheduling & Management",
                image: staff,
            },
            // Add more dummy services as needed
        ];

        // Simulate fetch (replace with actual fetch call)
        // setTimeout(() => {
        setServices(dummyData);
        //     }, 100); // Simulate a 1-second delay
    }, []);

    return [services];
};