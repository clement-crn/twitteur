import "./trend.css";

export default function Trend({ line1, line2 }) {
    return (
        <div className="trendcontainer">
            <p className="line1">{line1}</p>
            <p className="line2">{line2}</p>
        </div>
    );
}
