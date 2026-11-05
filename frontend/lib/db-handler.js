import fs from 'fs';
import path from 'path';

// Path to our new JSON database file
// This path now goes UP one level from 'frontend' to the project root.
const dbPath = path.join(process.cwd(), '..', 'db.json');

// Initial data to write if the file doesn't exist
const initialData = {
  1: {
    name: "Dr. Sohag",
    referencePhotoUrl: "/photos/Dr_sohag.jpeg",
    passwordHash: null,
  },
  2: {
    name: "Dr. Omar Farok",
    referencePhotoUrl: "/photos/dr_omor.jpg",
    passwordHash: null,
  },
  3: {
    name: "Dr. Faisal",
    referencePhotoUrl: "/photos/Faisal_sir.jpeg",
    passwordHash: null,
  },
  4: {
    name: "Dr. Shimu",
    referencePhotoUrl: "/photos/shimu.jpeg",
    passwordHash: null,
  },
  5: {
    name: "Dr. Uday",
    referencePhotoUrl: "/photos/uday.jpeg",
    passwordHash: null,
  },
  6: {
    name: "Dr. rakib",
    referencePhotoUrl: "/photos/Rakib.jpeg",
    passwordHash: null,
  },
};

// Function to read the database
export function readDoctorDB() {
  try {
    // If file doesn't exist, create it with initial data
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
      return initialData;
    }
    // If it exists, read it
    const fileData = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(fileData);
  } catch (e) {
    console.error("Failed to read DB, returning initial data", e);
    return initialData; // Fallback
  }
}

// Function to write to the database
export function writeDoctorDB(data) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
  } catch (e) {
    console.error("Failed to write to DB", e);
  }
}