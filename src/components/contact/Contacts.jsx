import { Link } from "react-router-dom";
import React from "react";
import Contact from "./Contact";
import Spinner from "../Spinner";
import { CurrentLine, Orange, Pink } from "../../helpers/colors";
// import NoContact from "../../assets/NoContact.png"

const Contacts = ({ contacts, loading }) => {
    
    return (
        <>

            <section className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">
                                <Link to={"/contacts/add"} className="btn mx-2" style={{ backgroundColor: Pink }}>
                                    ساخت مخاطب جدید
                                    <i className="fa fa-plus-circle mx-2" />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {loading ? <Spinner /> : (
                <section className="container">
                    <div className="row">
                        {Object.keys(contacts).length > 0
                            ? contacts.map((item) => <Contact key={item.id} contact={item} />)
                            : (
                                <div className="text-center py-5" style={{ backgroundColor: CurrentLine }}>
                                    <p className="h3" style={{ color: Orange }}>
                                        مخاطب یافت نشد
                                    </p>
                                    {/* <img src={NoContact} alt="" className="w-25"/> */}
                                    <img src={require("../../assets/NoContact.png")} alt="" className="w-25" />
                                </div>
                            )
                        }

                    </div>
                </section>
            )
            }

        </>
    );
}

export default Contacts;