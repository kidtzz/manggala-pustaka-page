import React from "react";
import StatusAlert, { StatusAlertService } from "react-status-alert";
import "react-status-alert/dist/status-alert.css";

export class ExampleApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            alertId: "",
        };

        this.showSuccessAlert = this.showSuccessAlert.bind(this);
        this.removeAlert = this.removeAlert.bind(this);
    }

    showSuccessAlert() {
        const alertId = StatusAlertService.showSuccess(
            "Thanks your email submited"
        );
        this.setState({ alertId });
    }

    removeAlert() {
        StatusAlertService.removeAlert(this.state.alertId);
    }

    render() {
        return (
            <div>
                <StatusAlert />

                <button
                    className="btn button2 m-1"
                    type="submit"
                    onClick={this.showSuccessAlert}
                >
                    Send
                </button>
            </div>
        );
    }
}

export default ExampleApp;
