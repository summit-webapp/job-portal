import React from "react";

interface ResumeScoreProps {
  /** Score from 0 to 100 */
  score?: number;
  /** Diameter of the circle in px (default 90) */
  size?: number;
  /** Custom match label from API response */
  label?: string;
}

const getScoreColorConfig = (score: number) => {
  if (score >= 75) {
    return {
      color: "#28a745",       // green
      trackColor: "#d4edda",
    };
  } else if (score >= 45) {
    return {
      color: "#fd7e14",       // orange
      trackColor: "#fde8d0",
    };
  } else {
    return {
      color: "#dc3545",       // red
      trackColor: "#f8d7da",
    };
  }
};

const ResumeScore: React.FC<ResumeScoreProps> = ({ score, size = 90, label }) => {
  // If score or label is not provided, or label is null/empty, do not show it
  if (
    score === undefined ||
    score === null ||
    !label ||
    label === "null" ||
    label === ""
  ) {
    return null;
  }

  const { color, trackColor } = getScoreColorConfig(score);

  const strokeWidth = size * 0.1;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {/* Circular progress */}
      <div style={{ position: "relative", width: size, height: size }}>
        <svg
          width={size}
          height={size}
          style={{ transform: "rotate(-90deg)" }}
        >
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={trackColor}
            strokeWidth={strokeWidth}
          />
          {/* Progress arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.8s ease" }}
          />
        </svg>

        {/* Center text — label */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: size * 0.10,
              fontWeight: 700,
              color,
              lineHeight: 1.1,
              textAlign: "center",
              padding: "0 4px",
            }}
          >
            {label}
          </span>
          <span
            style={{
              fontSize: size * 0.11,
              color: "#6c757d",
              lineHeight: 1,
            }}
          >
            {score}%
          </span>
        </div>
      </div>

      {/* Caption */}
      <span
        style={{
          fontSize: "9px",
          fontWeight: 600,
          color: "#6c757d",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
        }}
      >
        Resume Score
      </span>
    </div>
  );
};

export default ResumeScore;
