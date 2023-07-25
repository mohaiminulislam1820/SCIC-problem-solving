const randomPasswordGenerator = length => {
    const upperCaseLetter=()=>String.fromCharCode(Math.floor(Math.random()*(91-65)+65));
    const lowerCaseLetter = () => String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97));
    const number = () => Math.floor(Math.random() * 10);
    const specialChar = () => ['~', '!', '@', '#', '$', '%', '&', '*'][Math.floor(Math.random() * 8)];

    const chars = [upperCaseLetter, lowerCaseLetter, number, specialChar];
    
    let password = '';
    for (let i = 0; i < length; i++){
        password += chars[Math.floor(Math.random()*4)]();
    }
    
    return password;
}

console.log(randomPasswordGenerator(7));