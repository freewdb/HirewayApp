const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser');
const { sequelize } = require('./database.js');
const { Contacts, Messages, Orders } = require('./models.js');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*', // Consider restricting this in production
    },
});

app.use(bodyParser.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hireway API is running!');
});

// Companies Endpoints
app.get('/companies/:id', async (req, res) => {
    try {
        const company = await Companies.findByPk(req.params.id);
        if (!company) return res.status(404).json({ message: 'Company not found' });
        res.json(company);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving company', error });
    }
});

app.post('/companies', async (req, res) => {
    try {
        const company = await Companies.create(req.body);
        res.status(201).json(company);
    } catch (error) {
        res.status(500).json({ message: 'Error creating company', error });
    }
});

app.put('/companies/:id', async (req, res) => {
    try {
        const company = await Companies.findByPk(req.params.id);
        if (!company) return res.status(404).json({ message: 'Company not found' });
        await company.update(req.body);
        res.json(company);
    } catch (error) {
        res.status(500).json({ message: 'Error updating company', error });
    }
});

app.delete('/companies/:id', async (req, res) => {
    try {
        const company = await Companies.findByPk(req.params.id);
        if (!company) return res.status(404).json({ message: 'Company not found' });
        await company.destroy();
        res.json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting company', error });
    }
});

// Candidates Endpoints
app.get('/candidates/:id', async (req, res) => {
    try {
        const candidates = await Candidates.findByPk(req.params.id);
        if (!candidates) return res.status(404).json({ message: 'Candidate not found' });
        res.json(candidates);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving candidate', error });
    }
});

app.post('/candidates', async (req, res) => {
    try {
        const candidates = await Candidates.create(req.body);
        res.status(201).json(candidates);
    } catch (error) {
        res.status(500).json({ message: 'Error creating candidate', error });
    }
});

app.put('/candidates/:id', async (req, res) => {
    try {
        const candidates = await Candidates.findByPk(req.params.id);
        if (!candidates) return res.status(404).json({ message: 'Candidate not found' });
        await candidates.update(req.body);
        res.json(candidates);
    } catch (error) {
        res.status(500).json({ message: 'Error updating candidate', error });
    }
});

app.delete('/candidates/:id', async (req, res) => {
    try {
        const candidates = await Candidates.findByPk(req.params.id);
        if (!candidates) return res.status(404).json({ message: 'Candidate not found' });
        await candidates.destroy();
        res.json({ message: 'Candidate deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting candidate', error });
    }
});


// Orders Endpoints
app.get('/orders/:id', async (req, res) => {
    try {
        const orders = await Orders.findByPk(req.params.id);
        if (!orders) return res.status(404).json({ message: 'Order not found' });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving order', error });}
        import express from 'express';
        import { createServer } from 'http';
        import { Server } from 'socket.io';
        import { json } from 'body-parser';
        import { sequelize } from './database.js';
        import { Contacts, Messages, Orders } from './models.js';

        const app = express();
        const httpServer = createServer(app);
        const io = new Server(httpServer, {
            cors: {
                origin: '*',
            },
        });

        app.use(json());

        // Orders Endpoints
        app.get('/orders', async (req, res) => {
            try {
                const orders = await Orders.findAll();
                res.json(orders);
            } catch (error) {
                res.status(500).json({ message: 'Error retrieving orders', error });
            }
        });

        app.get('/orders/:id', async (req, res) => {
            try {
                const order = await Orders.findByPk(req.params.id);
                if (!order) return res.status(404).json({ message: 'Order not found' });
                res.json(order);
            } catch (error) {
                res.status(500).json({ message: 'Error retrieving order', error });
            }
        });

        app.post('/orders', async (req, res) => {
            try {
                const order = await Orders.create(req.body);
                res.status(201).json(order);
            } catch (error) {
                res.status(500).json({ message: 'Error creating order', error });
            }
        });

        app.put('/orders/:id', async (req, res) => {
            try {
                const order = await Orders.findByPk(req.params.id);
                if (!order) return res.status(404).json({ message: 'Order not found' });
                await order.update(req.body);
                res.json(order);
            } catch (error) {
                res.status(500).json({ message: 'Error updating order', error });
            }
        });

        app.delete('/orders/:id', async (req, res) => {
            try {
                const order = await Orders.findByPk(req.params.id);
                if (!order) return res.status(404).json({ message: 'Order not found' });
                await order.destroy();
                res.json({ message: 'Order deleted successfully' });
            } catch (error) {
                res.status(500).json({ message: 'Error deleting order', error });
            }
        });

        // Messages Endpoints
        app.get('/messages', async (req, res) => {
            try {
                const messages = await Messages.findAll();
                if (!messages) return res.status(404).json({ message: 'Messages not found' });
                res.json(messages);
            } catch (error) {
                res.status(500).json({ message: 'Error retrieving messages', error });
            }
        });

        app.get('/messages/:id', async (req, res) => {
            try {
                const message = await Messages.findByPk(req.params.id);
                if (!message) return res.status(404).json({ message: 'Message not found' });
                res.json(message);
            } catch (error) {
                res.status(500).json({ message: 'Error retrieving message', error });
            }
        });

        app.post('/messages', async (req, res) => {
            try {
                const message = await Messages.create(req.body);
                res.status(201).json(message);
            } catch (error) {
                res.status(500).json({ message: 'Error creating message', error });
            }
        });

        app.put('/messages/:id', async (req, res) => {
            try {
                const message = await Messages.findByPk(req.params.id);
                if (!message) return res.status(404).json({ message: 'Message not found' });
                await message.update(req.body);
                res.json(message);
            } catch (error) {
                res.status(500).json({ message: 'Error updating message', error });
            }
        });

        app.delete('/messages/:id', async (req, res) => {
            try {
                const message = await Messages.findByPk(req.params.id);
                if (!message) return res.status(404).json({ message: 'Message not found' });
                await message.destroy();
                res.json({ message: 'Message deleted successfully' });
            } catch (error) {
                res.status(500).json({ message: 'Error deleting message', error });
            }
        });

        // Contacts Endpoints
        app.get('/contacts', async (req, res) => {
            try {
                const contacts = await Contacts.findAll();
                res.json(contacts);
            } catch (error) {
                res.status(500).json({ message: 'Error retrieving contacts', error });
            }
        });

        app.get('/contacts/:id', async (req, res) => {
            try {
                const contact = await Contacts.findByPk(req.params.id);
                if (!contact) return res.status(404).json({ message: 'Contact not found' });
                res.json(contact);
            } catch (error) {
                res.status(500).json({ message: 'Error retrieving contact', error });
            }
        });

        app.post('/contacts', async (req, res) => {
            try {
                const contact = await Contacts.create(req.body);
                res.status(201).json(contact);
            } catch (error) {
                res.status(500).json({ message: 'Error creating contact', error });
            }
        });

        app.put('/contacts/:id', async (req, res) => {
            try {
                const contact = await Contacts.findByPk(req.params.id);
                if (!contact) return res.status(404).json({ message: 'Contact not found' });
                await contact.update(req.body);
                res.json(contact);
            } catch (error) {
                res.status(500).json({ message: 'Error updating contact', error });
            }
        });

        app.delete('/contacts/:id', async (req, res) => {
            try {
                const contact = await Contacts.findByPk(req.params.id);
                if (!contact) return res.status(404).json({ message: 'Contact not found' });
                await contact.destroy();
                res.json({ message: 'Contact deleted successfully' });
            } catch (error) {
                res.status(500).json({ message: 'Error deleting contact', error });
            }
        });

        // Socket.io event handling (if you plan to use real-time features)
        io.on('connection', (socket) => {
            console.log('a user connected');
            // Add your socket event handlers here
            // Example:
            // socket.on('some event', (data) => {
            //     console.log(data);
            // });
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });
        });

        const PORT = process.env.PORT || 3000;
        sequelize.sync().then(() => {
            httpServer.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });
        });
