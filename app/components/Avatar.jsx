import md5 from "md5";

const BASE_URL = "https://www.gravatar.com/avatar";
export default function Avatar({ email }) {
  //const {email} = props;
  // const email = props.email d'autres facons de recevoir en parametre
  //
  const hash = md5(email.trim().toLowerCase());
  // console.log(hash);

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
