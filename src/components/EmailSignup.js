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
                notice = <div class="notification is-warning">
                    <button class="delete" onClick={this.handleClearStatus}></button>
                Something went wrong. <span dangerouslySetInnerHTML={{ __html: this.state.status ? this.state.status.msg : '' }}></span>
                </div>;
            } else {
                notice = <div class="notification is-info">
                    <button class="delete" onClick={this.handleClearStatus}></button>
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
                                <div class="field">
                                    <label htmlFor="firstname" class="label">First Name</label>
                                    <div class="control">
                                        <input class="input" id="firstname" type="text" name="FNAME" value={this.state.FNAME} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div class="field">
                                    <label htmlFor="lastname" class="label">Last Name</label>
                                    <div class="control">
                                        <input id="lastname" class="input" type="text" name="LNAME" value={this.state.LNAME} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div class="field">
                                    <label htmlFor="email" class="label">Email (required)</label>
                                    <div class="control">
                                        <input id="email" class="input" type="email" name="EMAIL" value={this.state.EMAIL} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <button class="button is-link">Subscribe</button>
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