import * as usersService from '../../utilities/users-service'

export default function OrderHistory() {
    async function handleCheckToken() {
      const expDate = await usersService.checkToken();
      console.log(expDate)

    }
    return (
    <>
        <h1>OrderHistoryPage</h1>
        <button onClick={() => handleCheckToken()}>Check When My</button>
    </>
    )
}