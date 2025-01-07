var _awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

import { router } from 'express';
import fetch from 'node-fetch';
const router = Router();

router.get('/maps', (req, res) => _awaiter(void 0, void 0, void 0, function* () {
    const { address } = req.query;
    const myHeaders = new fetch.Headers();
    myHeaders.append("apikey", 'GOOGLE_MAPS_API_KEY');

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`, requestOptions)
        .then(response => response.json())
        .then(result => res.json(result))
        .catch(error => res.json(error));
}
));