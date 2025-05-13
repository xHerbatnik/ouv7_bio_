export default (req, res) => {
    // Dane "analityczne"
    const data = {
        ip: req.headers['x-forwarded-for'] || req.ip,
        userAgent: req.headers['user-agent'],
        timestamp: new Date().toISOString()
    };

    // Logowanie tylko w konsoli Vercela
    console.log('Analytics event:', JSON.stringify(data));
    
    // Zwróć pomyślną odpowiedź
    res.status(200).json({ status: 'ok' });
};