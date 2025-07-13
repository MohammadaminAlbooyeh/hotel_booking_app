from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Sample in-memory data
class Booking(BaseModel):
    id: int
    guest_name: str
    room_number: int
    check_in: str
    check_out: str

bookings: List[Booking] = []

@app.get("/bookings", response_model=List[Booking])
def get_bookings():
    return bookings

@app.post("/bookings", response_model=Booking)
def create_booking(booking: Booking):
    bookings.append(booking)
    return booking

@app.get("/bookings/{booking_id}", response_model=Booking)
def get_booking(booking_id: int):
    for booking in bookings:
        if booking.id == booking_id:
            return booking
    return {"error": "Booking not found"}

@app.delete("/bookings/{booking_id}")
def delete_booking(booking_id: int):
    global bookings
    bookings = [b for b in bookings if b.id != booking_id]
    return {"message": "Booking deleted"}
