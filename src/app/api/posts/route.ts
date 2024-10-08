export async function GET () {
      const res = await fetch('https://api.nomoreparties.co/beatfilm-movies/', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      return Response.json({data})
    }