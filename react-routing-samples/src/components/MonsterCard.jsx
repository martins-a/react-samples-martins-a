
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function MonsterCard({
    name,
    size,
    type
}) {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div>
                    {name}
                </div>
            </CardContent>
        </Card>
    )

}