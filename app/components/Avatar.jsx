import md5 from "md5";

const BASE_URL = "https://www.gravatar.com/avatar";
export default function Avatar({ email }) {
  const hash = md5(email.trim().toLowerCase());

  return (
    <div>
      <img
        className="rounded-full"
        src={`${BASE_URL}/${hash}`}
        width={60}
        height={60}
        alt="Avatar"
      />
    </div>
  );
}
