const SessionStorageExample = () => {
    // Set the item into sessionStorage
    sessionStorage.setItem('username', 'Ming Zhi')
    // Retrieve the item from sessionStorage
    const username = sessionStorage.getItem('username')
    console.log(username)
    // As you can see, if you give a key that is invalid,sessionStorage will return null.

    return <p>Username: {username}</p>
}

export default SessionStorageExample