import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    managerName: { type: String },
    contactEmail: { type: String, match: /.+\@.+\..+/ }, // Validates email format
    description: { type: String },
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }], // References Room model
});

const Property = mongoose.model('Property', propertySchema);
export default Property;
