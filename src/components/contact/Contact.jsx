import { Purple, CurrentLine, Red, Orange, Green } from "../../helpers/colors"

const Contact = ({ contact }) => {
    return (
        <div className="col-md-6">
            <div className="card my-2" style={{ backgroundColor: CurrentLine }}>
                <div className="card-body">
                    <div className="row d-flex align-items-center justify-content-around">
                        <div className="col-sm-4">
                            <img src="https://via.placeholder.com/200" alt={contact.name} style={{ border: `1px solid ${Purple}` }}
                                className="img-fluid rounded"
                            />
                        </div>
                        <div className="col-sm-7">
                            <ul className="list-group">

                                <li className="list-group-item list-group-item-dark">
                                    نام و نام  خانوادگی: {" "}
                                    <span className="fw-bold">
                                        {contact.name}
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    شماره موبایل: {" "}
                                    <span className="fw-bold">
                                        {contact.mobile}
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    آدرس ایمیل: {" "}
                                    <span className="fw-bold">
                                        {contact.email}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-1 d-flex flex-column align-items-center">
                            <button className="btn my-1" style={{ backgroundColor: Orange }}>
                                <i className="fa fa-eye" />
                            </button>
                            <button className="btn my-1" style={{ backgroundColor: Green }}>
                                <i className="fa fa-pencil" />
                            </button>
                            <button className="btn my-1" style={{ backgroundColor: Red }}>
                                <i className="fa fa-trash" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;