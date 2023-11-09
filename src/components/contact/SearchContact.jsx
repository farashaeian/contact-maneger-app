import {Purple} from '../../helpers/colors';

const SearchContact = () => {
    return (
        <>
            <div className="input-group mx-2 w-75" dir="ltr">
                <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: Purple }}>
                    <i className="fa fa-search" />
                </span>
                <input dir="rtl" type="text" className="form-control" placeholder="جست و جوی مخاطب" aria-label="Search" aria-describedby="basic-addon1">

                </input>
            </div>
        </>
    );
}

export default SearchContact;