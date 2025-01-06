import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Property from './models/Property.js';
import Room from './models/Room.js';
import Tenant from './models/Tenant.js';

dotenv.config();

const testModels = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        // Add sample tenant
        const tenant = new Tenant({
            name: 'John Doe',
            email: 'john@example.com',
            phone: '123456789',
            emergencyContact: 'Jane Doe',
            moveInDate: new Date('2023-01-01'),
        });
        const savedTenant = await tenant.save();

        // Add sample room
        const room = new Room({
            roomNumber: 101,
            isOccupied: true,
            monthlyRent: 1200,
            roomType: 'Single',
            tenant: savedTenant._id,
        });
        const savedRoom = await room.save();

        // Add sample property
        const property = new Property({
            name: 'Downtown Apartments',
            address: '123 Main St',
            city: 'Toronto',
            managerName: 'Alice Johnson',
            contactEmail: 'alice@downtown.com',
            description: 'Luxury apartments in the heart of the city.',
            rooms: [savedRoom._id],
        });
        const savedProperty = await property.save();

        console.log('Data saved successfully!');
        console.log(savedProperty);

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

testModels();
