

import User from '../model/user.js'


export async function getAllUsers(req, res) {

    const users = await User.find({}).exec()

    res.json({
        status: true,
        data: users

    })

}

export async function getUserById(req, res) {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                status: false,
                message: 'User not found'
            });
        }

        res.json({
            status: true,
            data: user
        });
    } catch (e) {
        res.status(500).json({
            status: false,
            message: e.message
        });
    }
}




export async function deleteUser(req, res) {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                status: false,
                message: 'User not found'
            });
        }

        await User.findByIdAndDelete(userId);

        res.json({
            status: true,
            message: 'user deleted successfully'
        });
    } catch (e) {
        res.status(500).json({
            status: false,
            message: e.message
        });
    }
}




export async function createUser(req, res) {

    try {
        // your logic here

        await User.create(req.body);

        res.json({
            status: true,
            message: 'user created successfully'
        });

    } catch (e) {
        res.status(500).json({
            status: false,
            message: e.message
        });
    }

}



export async function updateUser(req, res) {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                status: false,
                message: 'User not found'
            });
        }

        await User.findByIdAndUpdate(userId, req.body);

        return res.json({
            status: true,
            message: 'User updated successfully'
        });
    } catch (e) {
        res.status(500).json({
            status: false,
            message: e.message
        });
    }
}