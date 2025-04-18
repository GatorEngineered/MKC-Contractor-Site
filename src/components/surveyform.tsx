import { useState } from "react";
import survey from "../styles/survey.module.css";

interface SurveyFormProps {
    onSurveyComplete: (message: string) => void; 
}

const SurveyForm: React.FC<SurveyFormProps> = ({ onSurveyComplete }) => {
    const [formData, setFormData] = useState({
        workType: "",
        otherWorkType: "", // ✅ Added to fix missing property error
        timeline: "", // ✅ Added to fix missing property error
    });

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Generate a message based on the survey answers
        const message = `I need ${formData.workType === "other" ? formData.otherWorkType : formData.workType} work done. My preferred timeline is ${formData.timeline}.`;

        // Send the generated message to the parent component
        onSurveyComplete(message);
    };

    return (
        <form className={survey.surveyForm} onSubmit={handleSubmit}>
            <h2>How Can I Help You Today?</h2>

            <div className={survey.question}>
                <label htmlFor="workType">1. What type of work do you need?</label>
                <select name="workType" className={survey.workType} value={formData.workType} onChange={handleChange} required>
                    <option value="" disabled>Select a service</option>
                    <option value="interior">Interior Work</option>
                    <option value="exterior">Exterior Work</option>
                    <option value="red tag">Red Tag Violation Fix</option>
                    <option value="remediation">Remediation (Mold, Water Damage, etc.)</option>
                    <option value="other">Other</option>
                </select>

                {/* Show text input only if 'Other' is selected */}
                {formData.workType === "other" && (
                    <input
                        type="text"
                        name="otherWorkType"
                        placeholder="Specify the work needed"
                        value={formData.otherWorkType}
                        onChange={handleChange}
                        required
                    />
                )}
            </div>

            <div className={survey.question}>
                <label htmlFor="timeline">2. What is your preferred timeline?</label>
                <select name="timeline" className={survey.timeline} value={formData.timeline} onChange={handleChange} required>
                    <option value="" disabled>Select a timeline</option>
                    <option value="immediately">Immediately (ASAP, urgent need)</option>
                    <option value="few days">Within the next few days</option>
                    <option value="few weeks">Within the next few weeks</option>
                    <option value="not urgent">Not urgent, just planning ahead</option>
                </select>
            </div>

            <button className={survey.homesubmit} 
            type="submit">Submit</button>
        </form>
    );
};

export default SurveyForm;
