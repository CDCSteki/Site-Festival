document.addEventListener('DOMContentLoaded', () => {
    const sceneTitles = document.querySelectorAll('.zi > li');
    sceneTitles.forEach(title => {
        title.addEventListener('click', () => {
            const sceneProgram = title.querySelector('.scena');
            if (sceneProgram) {
                const isVisible = sceneProgram.style.display === 'block';
                sceneProgram.style.display = isVisible ? 'none' : 'block';
                if (!isVisible) {
                    title.classList.add('no-marker');
                } else {
                    title.classList.remove('no-marker');
                }
            }
        });
    });


    const allPrograms = document.querySelectorAll('.scena');
    allPrograms.forEach(program => {
        program.style.display = 'none';
    });
});

