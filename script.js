function bukaSurat() {
    const surat = document.getElementById("surat");

    surat.scrollIntoView({
        behavior: "smooth"
    });
}


function kejutan() {

    for (let i = 0; i < 40; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = ["🎉", "🎊", "💗", "✨", "🎈", "💖"][
            Math.floor(Math.random() * 6)
        ];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-50px";
        confetti.style.fontSize = Math.random() * 20 + 20 + "px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = Math.random() * 3000 + 2000;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)"
                },
                {
                    transform: "translateY(110vh) rotate(720deg)"
                }
            ],
            {
                duration: duration,
                easing: "linear"
            }
        );

        setTimeout(function () {
            confetti.remove();
        }, duration);
    }

    alert("🎉 HAPPY BIRTHDAY! 🎉\n\nSemoga semua harapan baikmu menjadi kenyataan! 💗");
}