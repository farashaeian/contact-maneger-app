import { Link } from "react-router-dom";

import Spinner from "../Spinner";
import { Comment, Green, Purple } from "../../helpers/colors";

const AddContact = ({ loading, contact, setContactInfo, groups }) => {
    return (
        <>
            {loading ? <Spinner /> : (
                <>
                    <section className="p-3">
                        <div style={{ width: "400px", height: "400px", position: "absolute", zIndex: "-1", top: "130px", left: "100px", opacity: "50%", backgroundColor: Purple, }}></div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="h4 fw-bold text-center" style={{ color: Green }}>
                                        ساخت مخاطب جدید
                                    </p>
                                </div>
                            </div>
                            <hr style={{ backgroundColor: Green }} />
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <form>
                                        <div className="mb-2">
                                            <input name="fullname" value={contact.fullname} onChange={setContactInfo} type="text" className="form-control" placeholder="نام و نام خانوادگی" required={true} />
                                        </div>
                                        {/* <div className="mb-2">
                                            <input name="photo" type="text" className="form-control" placeholder="آدرس تصویر" required={true} />
                                        </div> */}
                                        <div className="mb-2">
                                            <input name="mobile" value={contact.mobile} onChange={setContactInfo} type="number" className="form-control" placeholder="شماره موبایل" required={true} />
                                        </div>
                                        <div className="mb-2">
                                            <input name="email" value={contact.email} onChange={setContactInfo} type="email" className="form-control" placeholder="آدرس ایمیل" required={true} />
                                        </div>
                                        <div className="mb-2">
                                            <input name="job" value={contact.job} onChange={setContactInfo} type="text" className="form-control" placeholder="شغل" required={true} />
                                        </div>
                                        <div className="mb-2">
                                            <select name="group" value={contact.group} onChange={setContactInfo} required={true} className="form-control">
                                                <option value="">انتخاب گروه</option>
                                                {groups.lenght > 0 && groups.map((group) => (
                                                    <option key={group.id} value={group.id}>
                                                        {group.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mx-2">
                                            <input type="submit" className="btn" style={{ backgroundColor: Purple }} value="ساخت مخاطب" />
                                            <Link to={"/contacts"} className="btn mx-2" style={{ backgroundColor: Comment }}>
                                                انصراف
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )
            }
        </>
    );
}

export default AddContact;
