import { Router } from 'express';
import { Request, Response } from 'express-serve-static-core';
import fetch, { Headers } from 'node-fetch';

const router = Router();

router.post('/getDirections', async (req: Request, res: Response) => {
    const {origin, destination} = req.body;

    const myHeaders = new Headers();
    myHeaders.append("apikey", "GOOGLE_MAPS_API_KEY");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };

    try {
        const response = await fetch("https://maps.googleapis.com/maps/api/directions/json", requestOptions);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}
);

export default router;