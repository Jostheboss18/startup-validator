"use client"

import { useState } from "react"
import { User, LogOut, HelpCircle, Bell, Shield, CreditCard } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Settings</h1>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <nav className="flex flex-col">
            <button
              onClick={() => setActiveTab("account")}
              className={`flex items-center px-4 py-3 text-sm font-medium ${
                activeTab === "account"
                  ? "bg-primary/5 text-primary"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <User className="mr-3 h-5 w-5" />
              Account
            </button>
            <button
              onClick={() => setActiveTab("notifications")}
              className={`flex items-center px-4 py-3 text-sm font-medium ${
                activeTab === "notifications"
                  ? "bg-primary/5 text-primary"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Bell className="mr-3 h-5 w-5" />
              Notifications
            </button>
            <button
              onClick={() => setActiveTab("billing")}
              className={`flex items-center px-4 py-3 text-sm font-medium ${
                activeTab === "billing"
                  ? "bg-primary/5 text-primary"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <CreditCard className="mr-3 h-5 w-5" />
              Billing
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`flex items-center px-4 py-3 text-sm font-medium ${
                activeTab === "security"
                  ? "bg-primary/5 text-primary"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Shield className="mr-3 h-5 w-5" />
              Security
            </button>
            <button
              onClick={() => setActiveTab("help")}
              className={`flex items-center px-4 py-3 text-sm font-medium ${
                activeTab === "help"
                  ? "bg-primary/5 text-primary"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <HelpCircle className="mr-3 h-5 w-5" />
              Help & Support
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm lg:col-span-3">
          {activeTab === "account" && (
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Account Information</h2>
              <p className="mt-1 text-sm text-gray-500">Update your account information and email preferences.</p>

              <div className="mt-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                    defaultValue="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                    defaultValue="john.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                    defaultValue="Entrepreneur and startup enthusiast."
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="ml-3 rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-6">
                <button type="button" className="flex items-center text-sm font-medium text-red-600 hover:text-red-500">
                  <LogOut className="mr-2 h-5 w-5" />
                  Sign out
                </button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Notification Settings</h2>
              <p className="mt-1 text-sm text-gray-500">Manage how and when you receive notifications.</p>

              <div className="mt-6 space-y-6">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="email-notifications"
                      name="email-notifications"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="email-notifications" className="font-medium text-gray-700">
                      Email notifications
                    </label>
                    <p className="text-gray-500">Receive email notifications when your idea analysis is complete.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="marketing-emails"
                      name="marketing-emails"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="marketing-emails" className="font-medium text-gray-700">
                      Marketing emails
                    </label>
                    <p className="text-gray-500">Receive updates about new features and promotions.</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Billing Information</h2>
              <p className="mt-1 text-sm text-gray-500">Manage your subscription and payment methods.</p>

              <div className="mt-6">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Current Plan: Free</p>
                      <p className="text-sm text-gray-500">Basic validation for those just getting started</p>
                    </div>
                    <a
                      href="/upgrade"
                      className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90"
                    >
                      Upgrade
                    </a>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">Payment Methods</h3>
                  <p className="mt-1 text-sm text-gray-500">No payment methods added yet.</p>
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Security Settings</h2>
              <p className="mt-1 text-sm text-gray-500">Manage your password and account security.</p>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Change Password</h3>
                  <div className="mt-2 space-y-4">
                    <div>
                      <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="current-password"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="new-password"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        id="confirm-password"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      >
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Add an extra layer of security to your account by enabling two-factor authentication.
                  </p>
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                  >
                    Enable Two-Factor Authentication
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "help" && (
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Help & Support</h2>
              <p className="mt-1 text-sm text-gray-500">
                Get help with using the platform or contact our support team.
              </p>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Frequently Asked Questions</h3>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-md border border-gray-200 p-4">
                      <h4 className="text-sm font-medium text-gray-900">How does the AI validation work?</h4>
                      <p className="mt-1 text-sm text-gray-500">
                        Our AI analyzes your startup idea across multiple dimensions including market fit, competition,
                        and potential challenges to provide comprehensive insights.
                      </p>
                    </div>
                    <div className="rounded-md border border-gray-200 p-4">
                      <h4 className="text-sm font-medium text-gray-900">How accurate are the results?</h4>
                      <p className="mt-1 text-sm text-gray-500">
                        The AI provides insights based on available data and patterns, but we recommend using it as one
                        of many tools in your validation process.
                      </p>
                    </div>
                    <div className="rounded-md border border-gray-200 p-4">
                      <h4 className="text-sm font-medium text-gray-900">Can I export my results?</h4>
                      <p className="mt-1 text-sm text-gray-500">
                        Yes, Pro and Business plan users can export their results to PDF for sharing or offline
                        reference.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-medium text-gray-900">Contact Support</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Need more help? Our support team is available to assist you.
                  </p>
                  <div className="mt-4">
                    <label htmlFor="support-message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="support-message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                      placeholder="Describe your issue or question..."
                    />
                    <div className="mt-4 flex justify-end">
                      <button
                        type="button"
                        className="rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

