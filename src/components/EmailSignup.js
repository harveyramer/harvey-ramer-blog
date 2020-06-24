import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class EmailSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FNAME: '',
            LNAME: '',
            EMAIL: '',
            status: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClearStatus = this.handleClearStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.handleClearStatus();
        const listFields = {
            ...this.state,
        };

        console.log('Sending ...', this.state.EMAIL, listFields);
        if (ga){
            ga('send', 'event', 'Lead', 'Newsletter', 'Blog Footer', 0, null);
        }
        const result = await addToMailchimp(this.state.EMAIL, listFields);
        console.log('handleSubmit', result);
        this.setState({ status: result })
    }

    handleChange(event) {
        const t = event.target;
        const name = t.name;
        const value = t.value;
        const stateChange = {};
        stateChange[name] = value;
        console.log(stateChange);
        this.setState(stateChange);
    }

    handleClearStatus() {
        this.setState({ status: null });
    }

    render() {
        let notice = null;
        const status = this.state.status;
        if (status) {
            if (status.result === 'error') {
                notice = <div className="notification is-warning">
                    <button className="delete" onClick={this.handleClearStatus}></button>
                Something went wrong. <span dangerouslySetInnerHTML={{ __html: this.state.status ? this.state.status.msg : '' }}></span>
                </div>;
            } else {
                notice = <div className="notification is-info">
                    <button className="delete" onClick={this.handleClearStatus}></button>
                You have subscribed. Thank you!
            </div>;
            }
        }
        return (
            <section className="section" style={{backgroundColor:'#FCEFDD'}}>
                <div className="container">
                    <div className="column is-6 is-offset-3">
                        <div className="content">
                            {notice}
                            <form onSubmit={this.handleSubmit}>
                                <h2>Subscribe</h2>
                                <p>Sign up to receive emails when I write new content.</p>
                                <div className="field">
                                    <label htmlFor="firstname" className="label">First Name</label>
                                    <div className="control">
                                        <input className="input" id="firstname" type="text" name="FNAME" value={this.state.FNAME} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="lastname" className="label">Last Name</label>
                                    <div className="control">
                                        <input id="lastname" className="input" type="text" name="LNAME" value={this.state.LNAME} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="email" className="label">Email (required)</label>
                                    <div className="control">
                                        <input id="email" className="input" type="email" name="EMAIL" value={this.state.EMAIL} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <button className="button is-link">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
