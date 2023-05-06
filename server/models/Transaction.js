import mongoose from 'mongoose'

// user model for mongoose data, follows this format:
const TransactionSchema = new mongoose.Schema(
	{
		userId: String,
		const: String,
		products: {
			type: [mongoose.Types.ObjectId],
			of: Number,
		},
	},
	{ timestamps: true }
)

const Transaction = mongoose.model('Transaction', TransactionSchema)
export default Transaction
