import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const handleTextChange = (e) => {
        const trimmedText = text.trim();

        if (trimmedText === "") {
            setBtnDisabled(true);
            setMessage(null);
        } else if (trimmedText.length <= 10) {
            setMessage("Text must be at least 10 characters");
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    };

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => console.log(rating)} />
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Write a review"
                        onChange={handleTextChange}
                        value={text}
                    />
                    <Button
                        type="submit"
                        version="secondary"
                        isDisabled={btnDisabled}
                    >
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;
