import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export default async function MyAccountPage() {
  const customer = await validateAccessToken();

  return (
    <div>
      <section>
        <h2>Bienvenido {customer.name}</h2>
        <h2>Información de mi cuenta</h2>
        <p>Correo: {customer.email}</p>
      </section>
    </div>
  );
}