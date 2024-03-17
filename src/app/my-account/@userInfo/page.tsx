import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export default async function MyAccountPage() {
  const customer = await validateAccessToken();

  return (
    <div>
      <section>
        <h2>Bienvenido, {customer?.firstName}</h2>
        <p>Correo: {customer?.email}</p>
      </section>
    </div>
  );
}