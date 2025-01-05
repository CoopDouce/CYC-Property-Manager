import mongoose from 'mongoose';

const tenantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    phone: { type: String },
    emergencyContact: { type: String },
    moveInDate: { type: Date, required: true },
    moveOutDate: { type: Date }, // Optional if the tenant hasn't moved out yet
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }, // References Room model
});

const Tenant = mongoose.model('Tenant', tenantSchema);
export default Tenant;
