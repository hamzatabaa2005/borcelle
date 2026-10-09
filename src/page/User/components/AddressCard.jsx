import { LocationEdit, Star, Trash2Icon } from "lucide-react"
import { GrLocation } from "react-icons/gr"
import { BrandBtn, BrandInput, DefaultBtn } from "../../../components/BrandBtn"
import { AddressService } from "../../../services/AddressService"
import { useContext, useState } from "react"
import { UserContext } from "../../../context/UserContext/UserContext"
import { Modal } from "../../../components/Modal"
import { LuBuilding, LuCompass, LuHash, LuLandmark, LuMapPin, LuSignpost, LuTag } from "react-icons/lu"
import { IoCallOutline } from "react-icons/io5"
const Field = ({ label, value }) => (
    <div >
        <p className=" text-gray-500 dark:text-gray-400">{label} :</p>
        <p className=" text-gray-800 dark:text-white wrap-break-word">{value || "???"}</p>
    </div>
)


export const AddressCard = ({ id, name, phone,
    city,
    street,
    neighborhood,
    building,
    zip_code,
    is_default }) => {

    const { user } = useContext(UserContext)
    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState(null)
    const [Loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: name,
        phone: phone,
        city: city,
        street: street,
        neighborhood: neighborhood,
        building: building,
        zip_code: zip_code,
        is_default: false
    })

    function DeleteAddress() {
        AddressService.DeleteAddress(id, user.token)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            }).
            finally(

        )
    }

    function handleChange(key) {
        return (e) => setForm({ ...form, [key]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError(null)
        setLoading(true)
        const { name, phone, city, street, neighborhood, building, zip_code, lat, lng, is_default
        } = form;

        AddressService.UpdateAddress(id, name, phone, city, street, neighborhood, building, zip_code, lat, lng, is_default, user.token)
            .then((data) => {
                console.log(data)

                setShowModal(false)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })

    }
    return (
        <div className="border-2 border-pink-700 rounded-xl dark:text-white p-5">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="rounded-full p-2 bg-pink-700 text-white"> <GrLocation /> </div>
                    <div>
                        <h2 className="font-bold">{name}</h2>
                        <p className="text-gray-700">{phone}</p>
                    </div>
                </div>

                {is_default ? <span className="flex items-center text-white rounded-2xl bg-pink-700 py-1 px-2"><Star /> Default</span> : <></>}

            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-5 pt-4 border-t border-b my-3 border-gray-100 dark:border-gray-700">
                <Field label="City" value={city} />
                <Field label="Neighborhood" value={neighborhood} />
                <Field label="Street" value={street} />
                <Field label="Building" value={building} />
                <Field label="Zip code" value={zip_code} />

            </div>
            <div className="flex justify-end items-center gap-2">
                <DefaultBtn title={"delete"} icon={<Trash2Icon />} btnStyle={"rounded-md before:rounded-md"} onClick={DeleteAddress} />
                <DefaultBtn title={"Edit"} icon={<LocationEdit />} btnStyle={"rounded-md before:rounded-md"} onClick={() => { setShowModal(!showModal) }} />
            </div>
            <Modal showModal={showModal} >
                <div className="flex items-center justify-center rounded-xl   bg-white  dark:bg-gray-900 dark:text-white  ">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
                        <form onSubmit={handleSubmit} >
                            <h1 className="font-bold text-xl text-gray-800 dark:text-white">{"Edit address"}</h1>

                            <div className="grid md:grid-cols-2 gap-4">

                                <div className="flex flex-col gap-1">
                                    <BrandInput placeholder="Address name " divStyle="w-full" inputStyle={"border border-gray-300"} icon={<LuTag />}
                                        value={form.name} onChange={handleChange("name")} required />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <BrandInput placeholder="Phone number *" type="tel" divStyle="w-full" inputStyle={"border border-gray-300"} icon={<IoCallOutline />}
                                        value={form.phone} onChange={handleChange("phone")} required />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <BrandInput placeholder="City *" divStyle="w-full" inputStyle={"border border-gray-300"} icon={<LuLandmark />}
                                        value={form.city} onChange={handleChange("city")} required />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <BrandInput placeholder="Neighborhood *" divStyle="w-full" inputStyle={"border border-gray-300"} icon={<LuMapPin />}
                                        value={form.neighborhood} onChange={handleChange("neighborhood")} required />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <BrandInput placeholder="Street *" divStyle="w-full" inputStyle={"border border-gray-300"} icon={<LuSignpost />}
                                        value={form.street} onChange={handleChange("street")} required />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <BrandInput placeholder="Building *" divStyle="w-full" inputStyle={"border border-gray-300"} icon={<LuBuilding />}
                                        value={form.building} onChange={handleChange("building")} required />
                                </div>

                                <BrandInput placeholder="Zip code (optional)" divStyle="w-full" inputStyle={"border border-gray-300"} icon={<LuHash />}
                                    value={form.zip_code} onChange={handleChange("zip_code")} />

                                <div className="hidden md:block"></div>

                                <div className="flex flex-col gap-1">
                                    <BrandInput placeholder="Latitude (optional)" inputMode="decimal" divStyle="w-full" inputStyle={"border border-gray-300"} icon={<LuCompass />}
                                        value={form.lat} onChange={handleChange("lat")} />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <BrandInput placeholder="Longitude (optional)" inputMode="decimal" divStyle="w-full" inputStyle={"border border-gray-300"} icon={<LuCompass />}
                                        value={form.lng} onChange={handleChange("lng")} />
                                </div>
                            </div>


                            <label className="flex items-center gap-2 mt-4 text-gray-700 dark:text-gray-200 cursor-pointer w-fit">
                                <input type="checkbox" className="accent-pink-700 w-4 h-4" checked={form.is_default}
                                    onChange={(e) => setForm({ ...form, is_default: e.target.checked })} />
                                Set as my default address
                            </label>

                            {error && <p className="bg-amber-200 rounded-md text-center px-2 py-4 mt-4 break-all">{error.message}</p>}

                            <div className="flex justify-end gap-3 mt-6">
                                <DefaultBtn type="button" title="Cancel" btnStyle="rounded-md before:rounded-md my-2" onClick={() => {
                                    setShowModal(!showModal)
                                }} />
                                <BrandBtn title={Loading ? "Saving..." : "Save"} btnStyle="rounded-md before:rounded-md" disabled={Loading} />
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
