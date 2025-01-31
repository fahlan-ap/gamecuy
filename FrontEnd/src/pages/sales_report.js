import React, { useState } from 'react';
import { Table, Form, Container, Row, Col } from 'react-bootstrap';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import AdminNav from '../components/admin_nav';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const SalesReport = () => {
  const [salesData] = useState([
    { id: 1, date: '2025-01-01', product: 'God of War Ragnarok', quantity: 5, total: 4125000 },
    { id: 2, date: '2025-01-02', product: 'Ghost of Tsushima', quantity: 4, total: 3160000 },
    { id: 3, date: '2025-01-03', product: 'Red Dead Redemption 2', quantity: 7, total: 6300000 },
  ]);

  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = salesData.filter((data) =>
    data.product.toLowerCase().includes(filter.toLowerCase())
  );

  const productLabels = [...new Set(salesData.map((data) => data.product))];
  const totalSalesPerProduct = productLabels.map((product) =>
    salesData.filter((data) => data.product === product).reduce((sum, item) => sum + item.total, 0)
  );

  const barChartData = {
    labels: productLabels,
    datasets: [
      {
        label: 'Total Sales (IDR)',
        data: totalSalesPerProduct,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const dailyLabels = [...new Set(salesData.map((data) => data.date))];
  const quantityPerDay = dailyLabels.map((date) =>
    salesData.filter((data) => data.date === date).reduce((sum, item) => sum + item.quantity, 0)
  );

  const lineChartData = {
    labels: dailyLabels,
    datasets: [
      {
        label: 'Quantity Sold',
        data: quantityPerDay,
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <>
    <AdminNav />

    <Container>
      <Row className="mt-4">
        <Col>
          <h2>Sales Report</h2>
          <Form>
            <Form.Group className="mb-3" controlId="filter">
              <Form.Label>Filter by Product</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={filter}
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total (IDR)</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((data) => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.date}</td>
                    <td>{data.product}</td>
                    <td>{data.quantity}</td>
                    <td>{data.total.toLocaleString('id-ID')}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h4>Total Sales per Product</h4>
          <Bar key={JSON.stringify(barChartData)} data={barChartData} options={{ responsive: true }} />
        </Col>
        <Col md={6}>
          <h4>Quantity Sold per Day</h4>
          <Line key={JSON.stringify(lineChartData)} data={lineChartData} options={{ responsive: true }} />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default SalesReport;
