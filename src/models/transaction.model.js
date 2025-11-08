import mongoose, { Schema } from "mongoose"

const transactionSchema = new Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        type: { type: String, required: true },
        amount: { type: Number, required: true },
        description: { type: String, required: true },
        date: { type: Date, required: true, default: Date.now },
    },
    { timestamps: true }
)

export const Transaction = mongoose.model("Transaction", transactionSchema);