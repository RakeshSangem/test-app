import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const productDetails = [
  {
    productName: "Cage Hoops - Rhodium",
    productId: "R-29296",
    itemNumber: "desgi24-00109-A1",
    itemDescription: "Test QC budibase",
    orderDates: ["12 Dec 2024", "23 Jan 2025"],
    qcStatus: "FAILED",
    quantity: 6,
    vendor: "-",
  },
  {
    productName: "Gold Necklace - 18K",
    productId: "G-12345",
    itemNumber: "gold-67890",
    itemDescription: "High quality gold chain",
    orderDates: ["05 Nov 2024"],
    qcStatus: "PASSED",
    quantity: 3,
    vendor: "ABC Jewelers",
  },
];

const QCStatus = ({ status }: { status: string }) => {
  return (
    <View
      style={[
        styles.qcStatusContainer,
        status === "FAILED" ? styles.qcFailed : styles.qcPassed,
      ]}
    >
      <Text style={styles.qcStatusText}>{status}</Text>
    </View>
  );
};

const ProductDetailsCard = ({ product }: { product: any }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.field}>
        <Text style={styles.boldText}>Product Name: </Text>
        {product.productName} ({product.productId})
      </Text>
      <Text style={styles.field}>
        <Text style={styles.boldText}>Item Number: </Text>
        {product.itemNumber}
      </Text>
      <Text style={styles.subField}>{product.itemDescription}</Text>
      <Text style={styles.field}>
        <Text style={styles.boldText}>Order Date: </Text>
        {product.orderDates.join(" / ")}
      </Text>
      <Text style={styles.field}>
        <Text style={styles.boldText}>QC Status: </Text>
        <QCStatus status={product.qcStatus} />
      </Text>
      <Text style={styles.field}>
        <Text style={styles.boldText}>Quantity: </Text>
        {product.quantity}
      </Text>
      <Text style={styles.field}>
        <Text style={styles.boldText}>Vendor: </Text>
        {product.vendor}
      </Text>
    </View>
  );
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = productDetails.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor="#888"
      />

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.productId}
        renderItem={({ item }) => <ProductDetailsCard product={item} />}
        ListEmptyComponent={
          <Text style={styles.noResults}>No results found</Text>
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  searchInput: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    color: "#333",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 12,
  },
  field: {
    fontSize: 16,
    marginBottom: 8,
    color: "#555",
  },
  subField: {
    fontSize: 14,
    color: "#777",
    marginBottom: 16,
    marginLeft: 10,
  },
  boldText: {
    fontWeight: "600",
    color: "#333",
  },
  qcStatusContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  qcStatusText: {
    fontSize: 14,
    fontWeight: "600",
  },
  qcFailed: {
    backgroundColor: "#FFEBEB",
    borderColor: "#FF4C4C",
    borderWidth: 1,
  },
  qcPassed: {
    backgroundColor: "#E8FFEB",
    borderColor: "#28A745",
    borderWidth: 1,
  },
  noResults: {
    textAlign: "center",
    color: "#555",
    marginTop: 20,
    fontSize: 16,
  },
});

// // import { useAuth } from "@/context/Auth.context"; // Use context for auth management
// // import { useRouter } from "expo-router";
// // import React from "react";
// // import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"; // Using TouchableOpacity for custom button

// // export default function Index() {
// //   const { logout, isAuthenticated } = useAuth(); // Use context for auth management
// //   const router = useRouter();

// //   // Handling logout
// //   const handleLogout = async () => {
// //     try {
// //       await logout(); // Trigger the logout logic from context
// //       router.replace("/Login"); // Redirect to Login screen
// //     } catch (err) {
// //       console.error("Error during logout:", err);
// //       Alert.alert("Logout Error", "Failed to log out. Please try again.");
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Welcome to the Home Screen</Text>
// //       {/* Custom styled logout button */}
// //       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
// //         <Text style={styles.logoutButtonText}>Logout</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "#f0f0f0", // Soft background color for better readability
// //     padding: 20, // Added padding for mobile-friendly spacing
// //   },
// //   title: {
// //     fontSize: 28, // Larger title font for better visibility
// //     fontWeight: "bold",
// //     color: "#333", // Dark text for better contrast
// //     marginBottom: 30, // Space between title and button
// //   },
// //   logoutButton: {
// //     backgroundColor: "#f44336", // Red color for the logout button
// //     paddingVertical: 15, // Vertical padding for the button
// //     paddingHorizontal: 40, // Horizontal padding for the button
// //     borderRadius: 8, // Rounded corners
// //     shadowColor: "#000", // Shadow for the button to make it pop
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 6,
// //     elevation: 6, // Elevation for Android
// //   },
// //   logoutButtonText: {
// //     color: "#fff", // White text color
// //     fontSize: 18, // Font size for button text
// //     fontWeight: "bold", // Bold text for emphasis
// //     textAlign: "center", // Center the text
// //   },
// // });

// import { useAuth } from "@/context/Auth.context";
// import React, { useState } from "react";
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";

// export default function TodoApp() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const { logout } = useAuth();

//   // Add task function
//   const addTask = () => {
//     if (task.trim() !== "") {
//       setTasks([
//         ...tasks,
//         { id: Date.now().toString(), text: task, completed: false },
//       ]);
//       setTask(""); // Clear the input
//     }
//   };

//   // Mark task as completed
//   const toggleCompletion = (id) => {
//     setTasks(
//       tasks.map((item) =>
//         item.id === id ? { ...item, completed: !item.completed } : item
//       )
//     );
//   };

//   // Delete task function
//   const deleteTask = (id) => {
//     setTasks(tasks.filter((item) => item.id !== id));
//   };

//   // Render each task item
//   const renderTask = ({ item }) => (
//     <View style={styles.taskContainer}>
//       <TouchableOpacity
//         style={styles.checkboxContainer}
//         onPress={() => toggleCompletion(item.id)}
//       >
//         {/* <CheckBox
//           value={item.completed}
//           onValueChange={() => toggleCompletion(item.id)}
//         /> */}
//       </TouchableOpacity>
//       <Text style={[styles.taskText, item.completed && styles.completedTask]}>
//         {item.text}
//       </Text>
//       <TouchableOpacity
//         onPress={() => deleteTask(item.id)}
//         style={styles.deleteButton}
//       >
//         <Text style={styles.deleteText}>Delete</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>To-Do List</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter task"
//         value={task}
//         onChangeText={setTask}
//       />
//       <TouchableOpacity onPress={addTask} style={styles.addButton}>
//         <Text style={styles.addButtonText}>Add Task</Text>
//       </TouchableOpacity>
//       <FlatList
//         data={tasks}
//         renderItem={renderTask}
//         keyExtractor={(item) => item.id}
//         style={styles.taskList}
//       />

//       <TouchableOpacity onPress={logout} style={styles.addButton}>
//         <Text style={styles.addButtonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     paddingTop: 40,
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 32,
//     fontWeight: "bold",
//     color: "#333",
//     textAlign: "center",
//     marginBottom: 30,
//   },
//   input: {
//     height: 50,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingLeft: 15,
//     fontSize: 16,
//     marginBottom: 20,
//     backgroundColor: "#fff",
//   },
//   addButton: {
//     backgroundColor: "#3b9eff",
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   addButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   taskList: {
//     flex: 1,
//   },
//   taskContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     marginBottom: 15,
//     paddingVertical: 15,
//     paddingHorizontal: 10,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   checkboxContainer: {
//     marginRight: 15,
//   },
//   taskText: {
//     flex: 1,
//     fontSize: 18,
//     color: "#333",
//   },
//   completedTask: {
//     textDecorationLine: "line-through",
//     color: "#aaa",
//   },
//   deleteButton: {
//     paddingLeft: 15,
//   },
//   deleteText: {
//     color: "#f44336",
//     fontWeight: "bold",
//   },
// });
