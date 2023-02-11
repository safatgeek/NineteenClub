import './registration.css'
import React, { useState } from 'react'
import { db } from '../../firebaseConfig'
import { collection, addDoc, query, where, getDocs } from "firebase/firestore"

const Registration = () => {

  const membersCollectionRef = collection(db, "Members")

  const [submitting, setSubmitting] = useState(false)

  const [Name, setName] = useState("")
  const [fatherName, setFatherName] = useState("")
  const [motherName, setMotherName] = useState("")
  const [schoolName, setSchoolName] = useState("")
  const [collegeName, setCollegeName] = useState("")
  const [sscRoll, setSscRoll] = useState("")
  const [presentInstName, setPresentInsName] = useState("")
  const [presentAdd, setPresentAdd] = useState("")
  const [permanentAdd, setPermanentAdd] = useState("")
  const [bloodGroup, setBloodGroup] = useState("")
  const [contactNum, setContactNumber] = useState("")
  const [email, setEmail] = useState("")

  const [message, setMessage] = useState("")


  const checkUserExist = async (contact) => {


    const q = query(
      collection(db, 'Members'),
      where("contactNumber", "==", contact)
    );

    const querySnapshot = await getDocs(q)

    console.log(querySnapshot)
    console.log("Inside")
    if (!querySnapshot.empty) {
      return true
    }
    else {
      return false
    }
  }


  const Submit = async () => {
    if (Name && fatherName && motherName && schoolName && collegeName
      && presentInstName && presentAdd && permanentAdd && bloodGroup && contactNum && email && sscRoll) {
      setSubmitting(true)
      setMessage("Please Wait!!!")

      let userExists = true
      userExists = await checkUserExist(contactNum)

      if (!userExists) {

        await addDoc(membersCollectionRef, {
          name: Name,
          fatherName: fatherName,
          motherNAme: motherName,
          schoolName: schoolName,
          SscRoll: sscRoll,
          collegeName: collegeName,
          presentInstName: presentInstName,
          presentAddress: presentAdd,
          permanentAddress: permanentAdd,
          bloodGroup: bloodGroup,
          contactNumber: contactNum,
          email: email
        })
        setMessage("Submitted Successfully")

        setSubmitting(false)
      }

      else {
        setMessage("User already exists!!!")
        setSubmitting(false)
      }


    }
    else {
      setMessage("Please fill up all the Data")
    }

  }

  let msgClass = message == "Submitted Successfully" ? "success" : "failed"


  return (
    <div className="regParent">
      <div className="regHeading">
        <span>Send registration fee '1,000/-' in particular mobile banking number.</span>
        <span>Bkash,Nagad,Rocket personal number'01910618300' /Safat/ </span>
        <span>Call that number for the conformation of your sending. /Mendetory/</span>
        <span>Then fill up all these data below</span>
        <span>& complete the registration for 'Reunion-2023'</span>
        <span>For more update click the facebook icon & go to our facebook group.</span>

      </div>

      <div className='regForm'>
        <input placeholder='Name...'
          onChange={(event) => {
            setName(event.target.value)
          }} />
        <input placeholder="Father's name..."
          onChange={(event) => {
            setFatherName(event.target.value)
          }} />
        <input placeholder="Mother's name..."
          onChange={(event) => {
            setMotherName(event.target.value)
          }} />
        <input placeholder="School name..."
          onChange={(event) => {
            setSchoolName(event.target.value)
          }} />
        <input placeholder="College name..."
          onChange={(event) => {
            setCollegeName(event.target.value)
          }} />

        <input placeholder="SSC roll..."
          onChange={(event) => {
            setSscRoll(event.target.value)
          }} />

        <input placeholder="Present institution,s name..."
          onChange={(event) => {
            setPresentInsName(event.target.value)
          }} />
        <input placeholder="Present address..."
          onChange={(event) => {
            setPresentAdd(event.target.value)
          }} />
        <input placeholder="Permanent address..."
          onChange={(event) => {
            setPermanentAdd(event.target.value)
          }} />
        <input placeholder="Blood group..."
          onChange={(event) => {
            setBloodGroup(event.target.value)
          }} />
        <input placeholder="Contact Number..."
          onChange={(event) => {
            setContactNumber(event.target.value)
          }} />
        <input placeholder="Email..."
          onChange={(event) => {
            setEmail(event.target.value)
          }} />

        <div className={msgClass}>
          {message}
        </div>

        <button onClick={Submit} className="submitButton" disabled={submitting}>Submit</button>


      </div>
    </div>

  )
}

export default Registration