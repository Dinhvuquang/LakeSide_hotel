import React, { useEffect, useState } from 'react'
import { getAllRooms } from '../utils/ApiFunction'

const ExistingRoom = () => {
    const[rooms, setRooms] = useState([])
    const[currentPage, setCurrentPage] = useState(1)
    const[roomsPerPage] = useState(8)
    const[isLoading, setIsLoading] = useState(false)
    const[filteredRooms, setFilteredRooms] = useState([])
    const[selectedRoomType, setSelectedRoomType] = useState("")
    const[successMessage, SetSuccessMessage] = useState("")
    const[errorMessage, SetErrorMessage] = useState[""]
 
useEffect(() => {
fetchRooms()
}, [])


 const fetchRooms = async() => {
    setIsLoading(true)
    try {
        const result = await getAllRooms()
        setRooms(result)
        setIsLoading(false)
    } catch (error) {
        SetErrorMessage(error.message)
    }
 }

 useEffect(() =>{
    if(selectedRoomType === ""){
        setFilteredRooms(rooms)
    }else{
        const filtered = rooms.filter((room) => room.roomType === selectedRoomType)
        setFilteredRooms
    }
        setCurrentPage(1)
 },[rooms, selectedRoomType])
 const caculateTotalPages = (filteredRooms, roomsPerPage, rooms) => {
    const totalRooms = filteredRooms.length > 0 ? filteredRooms.length
    return Math.ceil(totalRooms/ roomsPerPage)
}
const indexOfLastRoom = currentPage * roomsPerPage
    return (
    <div>

    </div>
  )
}

export default ExistingRoom