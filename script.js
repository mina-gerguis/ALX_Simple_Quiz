// 1️⃣ تعريف الدالة checkAnswer
function checkAnswer() {
    // 2️⃣ تحديد الإجابة الصحيحة
    const correctAnswer = "4";

    // 3️⃣ استرداد إجابة المستخدم
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // التحقق إذا المستخدم اختار إجابة أم لا
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    // 4️⃣ مقارنة الإجابة الصحيحة بإجابة المستخدم
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"; // لون أخضر للإجابة الصحيحة
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // لون أحمر للإجابة الخاطئة
    }
}

// 5️⃣ إضافة مستمع حدث لزر الإرسال
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
