import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    roomNumber: { type: Number, required: true },
    isOccupied: { type: Boolean, default: false },
    monthlyRent: { type: Number, required: true },
    roomType: { type: String, enum: ['Single', 'Double', 'Studio'] }, // Limits room types
    tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }, // References Tenant model
    property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' }, // References Property model
});

const Room = mongoose.model('Room', roomSchema);
export default Room;
