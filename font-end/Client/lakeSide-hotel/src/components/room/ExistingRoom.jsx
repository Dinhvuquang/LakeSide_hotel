import React, { useEffect, useState } from 'react'
import { getAllRooms } from '../utils/ApiFunction'
import RoomPaginator from '../common/RoomPaginator'
import RoomFilter from '../common/RoomFilter'
import { Col } from 'react-bootstrap'

const ExistingRoom = () => {
    const[rooms, setRooms] = useState([{id: "", roomType: "", roomPrice: ""}])
    const[currentPage, setCurrentPage] = useState(1)
    const[roomsPerPage] = useState(8)
    const[isLoading, setIsLoading] = useState(false)
    const[filteredRooms, setFilteredRooms] = useState([{id: "", roomType: "", roomPrice: ""}])
    const[selectedRoomType, setSelectedRoomType] = useState("")
    const[successMessage, SetSuccessMessage] = useState("")
    const[errorMessage, SetErrorMessage] = useState("")

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

 const handlePaginationClick = (pageNumber) =>{
    setCurrentPage(pageNumber)
 }
 const caculateTotalPages = (filteredRooms, roomsPerPage, rooms) => {
    const totalRooms = filteredRooms.length > 0 ? filteredRooms.length : rooms.length
    return Math.ceil(totalRooms/ roomsPerPage)
}
const indexOfLastRoom = currentPage * roomsPerPage
const indexOffFirstRoom = indexOfLastRoom - roomsPerPage
const currentRooms = filteredRooms.slice(indexOffFirstRoom, indexOfLastRoom)
    return (
   <>
   {isLoading ?(
    <p>Loading existing rooms</p>
   ):(
    <>
    <section className='mt-5 mb-5 container'>
    <div className='d-flex justify-content-center mb-3 mt-5'>
        <h2>Exitsting Rooms </h2>
    </div>
    <Col md={6} className="mb-3 mb-md-0">
    <RoomFilter data={rooms} setFilteredData={setFilteredRooms} />
    </Col>
    <table className="table table-bordered table-hover">
        <thead>
            <tr className='text center'>
             <th>ID</th>   
             <th>Room Type</th>   
             <th>Room Price</th>   
             <th>Actions</th>   

            </tr>
        </thead>
        <tbody>
        {currentRooms.map((room)=>(
        <tr key={room.id} className='text-center'>
            <td>{room.id}</td>
            <td>{room.roomType}</td>
            <td>{room.roomPrice}</td>
            <td>
                <button>View / Edit</button>
                <button>Delete</button>
                
            </td>
        </tr>
        ))}
        </tbody>
    </table>
    <RoomPaginator
    currentPage={currentPage}
    TotalPages={caculateTotalPages(filteredRooms, roomsPerPage, rooms)}
    onPageChange={handlePaginationClick}
    
    />
    </section>
    </>

   )}
   </>
  )
}

export default ExistingRoom