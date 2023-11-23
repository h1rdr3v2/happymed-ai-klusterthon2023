// Load environment variables
import dotenv from "dotenv";
dotenv.config();

// Import dependencies
import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// // Import routes
// import walletRoutes from "./routes/walletRoutes.js";

// //Import middleware
// import authMiddleware from "./middleware/auth.js";

// Create Express app
const app = express();

// Middleware
app.use(json());
app.use(cors());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
	res.send("Hello World!");
});

// Error handling middleware
app.use((req, res, next) => {
	res.status(404).json({
		error: "Not Found",
	});
});

app.use((err, req, res, next) => {
	console.error(err); // Log the error for debugging purposes

	// Set a default error message and status code
	let errorMessage = "Internal Server Error";
	let statusCode = 500;

	// Check if the error has a custom message and status code
	if (err.message && err.statusCode) {
		errorMessage = err.message;
		statusCode = err.statusCode;
	}

	// Send the error response to the client
	res.status(statusCode).json({
		error: errorMessage,
	});
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("Server is running on port", port);
});

export default app;
