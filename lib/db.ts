import mongoose from 'mongoose';

// Directly hardcoded URI (not secure for production)
const MONGODB_URI = 'mongodb+srv://taryan692:TXy32oFQ7YWKHl76@cluster0.spuzhcz.mongodb.net/chatgpt-lab?retryWrites=true&w=majority&appName=Cluster0';

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined');
}

// Caching connection
let cached = (global as any).mongoose || { conn: null, promise: null };

const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectDB;
