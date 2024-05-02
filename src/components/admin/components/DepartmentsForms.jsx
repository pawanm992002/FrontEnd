import React, { useState } from "react";

//-------- Packages Stuff
import { VStack } from "@chakra-ui/react";

import { ButtonBox, FormBox, FormInputBox } from "../FormInputBox";
import axios from "axios";
import { url, AdminApiInstance } from "../../../apis/ApiIntances";
import toast from "react-hot-toast";

//------------- Create the profile form
export const FacultyMemberForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    designation: "",
    roomNo: "",
    department: "",
    profile: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    setForm({ ...form, profile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("add faculty", form);

    const { data } = await AdminApiInstance.post(
      "/department/add-member",
      form
    );
    console.log("adddddddd", data);

    setLoading(true);

    try {
    } catch (error) {}

    setLoading(false);
    setForm({ name: "", department: "", profile: "" });
  };

  return (
    <>
      <FormBox title={"Add New faculty"}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormInputBox
              label={"Faculty Name"}
              name={"name"}
              placeholder={"John Doe"}
              value={form.name}
              handleChange={handleChange}
            />

            <FormInputBox
              label={"Faculty Email"}
              name={"email"}
              type="email"
              placeholder={"johndoe23@gmail.com"}
              value={form.email}
              handleChange={handleChange}
            />

            <FormInputBox
              label={"Faculty Password"}
              name={"password"}
              type="password"
              placeholder={"johndoe23@gmail.com"}
              value={form.password}
              handleChange={handleChange}
            />

            <FormInputBox
              label={"Faculty Profile"}
              type="file"
              handleChange={handleFileChange}
              name={"profile"}
            />

            <FormInputBox
              label={"Faculty Department"}
              name={"department"}
              placeholder={"CSE"}
              value={form.department}
              handleChange={handleChange}
            />

            <FormInputBox
              label={"Faculty Designation"}
              name={"designation"}
              placeholder={"HOD"}
              value={form.designation}
              handleChange={handleChange}
            />

            <FormInputBox
              label={"Faculty RoomNo."}
              name={"roomNo"}
              placeholder={"C-7"}
              value={form.roomNo}
              handleChange={handleChange}
            />

            <ButtonBox loading={loading} type="submit" title={"Add Faculty"} />
          </VStack>
        </form>
      </FormBox>
    </>
  );
};

//------------ Create the examination Section form
export const AchievementForm = () => {
  const [form, setForm] = useState({
    department: "",
    achievement: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      console.log("form ..............", form);

      const { data } = await AdminApiInstance.post("/department/achievement", form);
      if(!data?.result) {
        toast.error("Achievement not Added")
        return
      }
      toast.success(data?.message)
    } catch (error) {
        toast.error(error?.response?.data?.error);
    }

    setLoading(false);
  };


  return (
    <>
      <FormBox title={"Add Achievements"}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormInputBox
              label={"Department"}
              name={"department"}
              placeholder={"CSE"}
              value={form.department}
              handleChange={handleChange}
            />

            <FormInputBox
              label={"Achievement"}
              name={"achievement"}
              placeholder={"Getting any rank in any contest"}
              value={form.achievement}
              handleChange={handleChange}
            />

            <FormInputBox
              label={"Category"}
              name={"category"}
              placeholder={"Student/College"}
              value={form.category}
              handleChange={handleChange}
            />

            <ButtonBox
              loading={loading}
              type="submit"
              title={"Add New Achievement"}
            />
          </VStack>
        </form>
      </FormBox>
    </>
  );
};

//------------ add new gallery in department
export const AddNewDepartmentGalleryForm = () => {
  const [form, setForm] = useState({ department: "", file: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) => setForm({ ...form, file: e.target.files[0] });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form", form);

    setLoading(true);

    try {
    } catch (error) {}

    setLoading(false);
  };

  return (
    <>
      <FormBox title={"Add Department Gallery"}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormInputBox
              label={"Department"}
              name={"department"}
              placeholder={"CSE"}
              value={form.department}
              handleChange={handleChange}
            />

            <FormInputBox
              label={"File"}
              name={"file"}
              type="file"
              handleChange={handleFileChange}
            />

            <ButtonBox loading={loading} type="submit" title={"Add Gallery"} />
          </VStack>
        </form>
      </FormBox>
    </>
  );
};

//------------ add new gallery in department
export const AddDepartmentTimeTableForm = () => {
  const [form, setForm] = useState({
    department: "",
    timetable: "",
    title: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) =>
    setForm({ ...form, timetable: e.target.files[0] });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      console.log("form ..............", form);

      const { data } = await AdminApiInstance.post("/department/timetable", form);
      if(!data?.result) {
        toast.error("Time Table not Added")
        return
      }
      toast.success(data?.message)
    } catch (error) {
        toast.error(error?.response?.data?.error);
    }

    setLoading(false);
  };

  return (
    <>
      <FormBox title={"Add Department TimeTable"}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormInputBox
              label={"Title"}
              name={"title"}
              placeholder={"title of the time table"}
              value={form.title}
              handleChange={handleChange}
            />

            <FormInputBox
              label={"Department"}
              name={"department"}
              placeholder={"CSE"}
              value={form.department}
              handleChange={handleChange}
            />

            <FormInputBox
              label={"Upload Timetable"}
              type="file"
              name={"timetable"}
              handleChange={handleFileChange}
            />

            <ButtonBox
              loading={loading}
              type="submit"
              title={"Upload Time Table"}
            />
          </VStack>
        </form>
      </FormBox>
    </>
  );
};
