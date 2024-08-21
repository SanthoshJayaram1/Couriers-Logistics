import app from "./app";
import connectDB from "./Backend/src/config/database";

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
