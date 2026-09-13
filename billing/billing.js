let generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', function() {
    let customerName = document.getElementById('customerName').value; 
    let roomNumber = document.getElementById('roomNumber').value;
    let checkIn = document.getElementById('checkIn').value;
    let checkOut = document.getElementById('checkOut').value;
     if(customerName.trim() === '' || roomNumber.trim() === '' || checkIn.trim() === '' || checkOut.trim() === '') {
        alert('Please fill in all the required fields.');
        return;
    }
    let checkInDate = new Date(checkIn);
    let checkOutDate = new Date(checkOut);
    let timeDiff = checkOutDate - checkInDate;
    let daysStayed = Math.ceil(timeDiff / (1000 * 3600 * 24));
    let roomRate = 15000; 
    let roomCharges = daysStayed * roomRate;
    let foodQuantity = 2;
    let foodPrice = 1000; 
    let foodCharges = foodQuantity * foodPrice;
    document.getElementById('foodCharges').textContent = `Rs. ${foodCharges.toFixed(2)}`;
    let totalCharges = roomCharges + foodCharges;
    let taxRate = 0.1;
    let taxAmount = totalCharges * taxRate;

    let finalAmount = totalCharges + taxAmount;
    document.getElementById('billCustomerName').textContent = customerName;
    document.getElementById('billRoomNumber').textContent = roomNumber;
    document.getElementById('billCheckIn').textContent = checkIn;
    document.getElementById('billCheckOut').textContent = checkOut;
    if(daysStayed <= 0) {
        alert('Check-out date must be after check-in date.');
        return;
    }
    document.getElementById('daysStayed').textContent = `${daysStayed} Nights`;
   
    document.getElementById('roomRate').textContent = `Rs. ${roomRate.toFixed(2)}`;
    document.getElementById('roomCharges').textContent = `Rs. ${roomCharges.toFixed(2)}`;
    document.getElementById('subTotal').textContent = `Rs. ${totalCharges.toFixed(2)}`;
    document.getElementById('taxAmount').textContent = `Rs. ${taxAmount.toFixed(2)}`;
    document.getElementById('grandTotal').textContent = `Rs. ${finalAmount.toFixed(2)}`;
    alert('Bill generated successfully!');
});