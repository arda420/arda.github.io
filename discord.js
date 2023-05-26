async function copydiscord() {
        try {
            await navigator.clipboard.writeText('arda#0420');
            ds.style.display='block';
            setTimeout("ds.style.display='none'", 2000);
        }
        catch (err) {
            console.error('Ошибка: ', err);
        }
}
